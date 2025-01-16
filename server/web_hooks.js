import { WebApp } from 'meteor/webapp'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/Users/kem/Code/simple-web-server')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage })

// Middleware to handle file uploads
WebApp.connectHandlers.use('/upload', upload.single('image'), (req, res) => {
  const cat = JSON.parse(req.body.cat)
  console.log('Heard request to upload an image', cat)
  if (!req.file) {
    res.writeHead(400)
    res.end('No file uploaded.')
    return
  }
  const extension = path.extname(req.file.originalname)
  const filename = `${cat._id}${extension}`
  const newPath = path.join('/Users/kem/Code/simple-web-server', filename)
  fs.renameSync(req.file.path, newPath)
  req.file.path = newPath
  req.file.filename = filename
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ filename, path: req.file.path }))
  console.log('Wrote uploaded image to /tmp')
})
