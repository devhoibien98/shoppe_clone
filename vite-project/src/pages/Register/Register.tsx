import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { getRules, type FormData } from '@/utils/rule'

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<FormData>()
  const rules = getRules(getValues)
  const onSubmit = handleSubmit((data) => {
    console.log('Data', data)
  })
  return (
    <div className="bg-orange-500">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-20 lg:py-32 lg:pr-10">
          <div className="lg:col-span-2 lg:col-start-4">
            <form className="p-10 rounded bg-white shadow-sm" onSubmit={onSubmit}>
              <div className="text-2xl">Đăng nhập</div>
              <div className="mt-8">
                <input
                  type="email"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                  placeholder="Email"
                  {...register('email', rules.email)}
                />
                <div className="mt-1 text-red-600 text-sm min-h-[1rem]">
                  {errors.email?.message}
                </div>
              </div>
              <div className="mt-3">
                <input
                  type="password"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                  placeholder="Password"
                  autoComplete="on"
                  {...register('password', rules.password)}
                />
                <div className="mt-1 text-red-600 text-sm min-h-[1rem]">
                  {errors.password?.message}
                </div>
              </div>
              <div className="mt-3">
                <input
                  type="confirm_password"
                  className="p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm"
                  placeholder="Confirm Password"
                  autoComplete="on"
                  {...register('confirm_password', {
                    ...rules.confirm_password,
                  })}
                />
                <div className="mt-1 text-red-600 text-sm min-h-[1rem]">
                  {errors.confirm_password?.message}
                </div>
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  className="w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600"
                >
                  Đăng ký
                </button>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <span className="text-gray-400">Bạn đã có tài khoản?</span>
                <Link to="/login" className="text-red-400 ml-1 font-bold">
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
