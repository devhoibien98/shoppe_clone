import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

export interface FormData {
  email: string
  password: string
  confirm_password: string
}

type Rules = {
  [K in keyof FormData]?: RegisterOptions<FormData, K>
}

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: { value: true, message: 'Bắt buộc nhập Email' },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Email chưa đúng định dạng',
    },
    maxLength: {
      value: 160,
      message: 'Email tối đa 160 kí tự',
    },
    minLength: {
      value: 5,
      message: 'Email tối thiểu 5 kí tự',
    },
  },
  password: {
    required: { value: true, message: 'Bắt buộc nhập mật khẩu' },
    minLength: {
      value: 6,
      message: 'Mật khẩu tối thiểu 6 kí tự',
    },
    maxLength: {
      value: 160,
      message: 'Mật khẩu tối đa 160 kí tự',
    },
  },

  confirm_password: {
    required: { value: true, message: 'Bắt buộc nhập lại mật khẩu' },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Confirm Password không khớp'
        : undefined,
  },
})
