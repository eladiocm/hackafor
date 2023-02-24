const API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image`

/**
 * Uploads an image file to Cloudinary
 * @param file - The file to upload to Cloudinary
 * @returns The image information returned by Cloudinary
 * @throws An error if the upload fails
 */

export const uploadImage = async (file) => {
  const formData = new FormData()

  formData.append('upload_preset', UPLOAD_PRESET)
  formData.append('timestamp', Date.now() / 1000)
  formData.append('api_key', API_KEY)
  formData.append('file', file)

  try {
    const res = await fetch(`${CLOUDINARY_URL}/upload`, {
      method: 'POST',
      body: formData
    })

    const data = await res.json()

    return data
  } catch (error) {
    console.error('Cloudinary', error)
    throw new Error('error uploading image')
  }
}
