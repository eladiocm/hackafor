import * as yup from 'yup'

const MAX_FILE_SIZE = 60000 // 60 KB

export const createSchema = yup
  .object({
    title: yup.string().required().min(3).max(50),
    description: yup.string().min(5).max(100).required(),
    github_url: yup.string().url().required(),
    page_url: yup.string().url().required(),
    technologies: yup.string().required(),
    file: yup
      .mixed()
      .test('required', 'You need to provide a file', (file) => {
        return file && file.length
      })
      .test('fileSize', 'The file is too large', (file) => {
        return file && file[0] && file[0].size <= MAX_FILE_SIZE
      })
  })
  .required()
