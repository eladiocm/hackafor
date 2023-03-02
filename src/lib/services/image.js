/* eslint-disable camelcase */
import { supabase } from '../client'
import { v4 as uuidv4 } from 'uuid'

const BUCKET_URL =
  'https://jqmztjdziscmbxddsswc.supabase.co/storage/v1/object/public/hackafor/'

export async function uploadImage(file) {
  const filename = `${uuidv4()}-${file.name}`

  const { data } = await supabase.storage
    .from('hackafor')
    .upload(filename, file, {
      upsert: false
    })

  return BUCKET_URL + data.path
}
