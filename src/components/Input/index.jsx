/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import styles from './input.module.css'

const Input = forwardRef(({ labelText, type = 'text', ...props }, ref) => {
  return (
    <label className={styles.label}>
      {labelText}
      <input
        ref={ref}
        type={type}
        className={type === 'file' ? styles.fileInput : styles.textInput}
        {...props}
      />
    </label>
  )
})

export default Input
