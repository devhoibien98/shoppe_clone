# REACT HOOK FORM - COMPLETE NOTES

---

# 1. Cài đặt

```bash
npm install react-hook-form
```

Nên tạo file `rules.ts` trong thư mục `utils` để quản lý validation riêng.

---

# 2. useForm()

`useForm()` là hook chính của React Hook Form.

```ts
const {
  register,
  handleSubmit,
  control,
  formState: { errors, isSubmitting, isValid },
  watch,
  getValues,
  setError,
  clearErrors,
  reset,
  setValue,
  trigger,
} = useForm<FormData>({
  mode: "onSubmit", // onSubmit | onBlur | onChange | all
  reValidateMode: "onChange",
});
```

## Các thuộc tính quan trọng

- register
- handleSubmit
- control
- formState.errors
- watch
- getValues
- setError
- clearErrors
- reset
- setValue
- trigger

---

# 3. register()

Dùng để kết nối input với RHF.

```tsx
<input {...register("email")} />
```

register trả về:

- name
- onChange
- onBlur
- ref

---

## Thêm validation

```tsx
<input
  {...register("email", {
    required: "Bắt buộc nhập Email",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Email không hợp lệ",
    },
    minLength: {
      value: 5,
      message: "Tối thiểu 5 ký tự",
    },
  })}
/>
```

### Các rule phổ biến

- required
- minLength
- maxLength
- min
- max
- pattern
- validate

---

# 4. handleSubmit()

```ts
const onSubmit = handleSubmit(async (data) => {
  console.log(data);
});
```

- Nếu hợp lệ → callback chạy
- Nếu không hợp lệ → không submit

---

# 5. formState

```ts
formState: {
  (errors, isDirty, isSubmitting, isValid, touchedFields);
}
```

### Hiển thị lỗi

```tsx
{
  errors.email?.message;
}
```

---

# 6. Custom validate

```ts
validate: (value) => value === getValues("password") || "Mật khẩu không khớp";
```

---

# 7. watch()

Theo dõi giá trị và gây re-render.

```ts
const password = watch("password");
```

---

# 8. getValues()

Lấy giá trị không re-render.

```ts
getValues("password");
```

---

# 9. setError()

Dùng khi backend trả lỗi.

```ts
setError("email", {
  type: "server",
  message: "Email đã tồn tại",
});
```

---

# 10. clearErrors()

```ts
clearErrors("email");
```

---

# 11. reset()

```ts
reset();
reset({ email: "test@gmail.com" });
```

---

# 12. setValue()

```ts
setValue("email", "new@email.com");
```

---

# 13. trigger()

Validate thủ công.

```ts
trigger("email");
```

---

# 14. Validation Mode

```ts
useForm({
  mode: "onSubmit",
});
```

Options:

- onSubmit (default)
- onBlur
- onChange
- all

---

# 15. Controller (UI Library Integration)

Dùng khi làm việc với component không support ref trực tiếp.

```tsx
import { Controller } from "react-hook-form";

<Controller
  name="email"
  control={control}
  render={({ field }) => <input {...field} />}
/>;
```

Thường dùng với:

- MUI
- Ant Design
- React Select

---

# 16. useFieldArray (Dynamic Form)

Dùng cho form động.

```ts
import { useFieldArray } from "react-hook-form";

const { fields, append, remove } = useFieldArray({
  control,
  name: "addresses",
});
```

---

# 17. FormProvider (Form lớn nhiều component)

```tsx
import { FormProvider } from "react-hook-form";

<FormProvider {...methods}>
  <ChildComponent />
</FormProvider>;
```

Dùng khi form chia nhỏ thành nhiều component.

---

# 18. Schema Validation (Zod / Yup)

Cài thêm:

```bash
npm install zod @hookform/resolvers
```

```ts
import { zodResolver } from "@hookform/resolvers/zod";

useForm({
  resolver: zodResolver(schema),
});
```

---

# 19. TypeScript Generic

```ts
interface FormData {
  email: string;
  password: string;
}

useForm<FormData>();
```

Lợi ích:

- register chỉ nhận key của FormData
- errors đúng type
- validate đúng type

---

# 20. Luồng hoạt động tổng quát

1. register khai báo field
2. Người dùng nhập dữ liệu
3. RHF validate
4. Lỗi lưu trong formState.errors
5. handleSubmit chạy nếu hợp lệ
6. Có thể setError nếu backend trả lỗi

---

# 21. Những thứ cần nắm để làm form doanh nghiệp

- Validation chuẩn
- Async submit
- setError từ backend
- Dynamic form (useFieldArray)
- Controller với UI library
- Schema validation (Zod/Yup)
- TypeScript generic
- Không re-render thừa

---

# Kết luận

React Hook Form giúp:

- Tối ưu performance (ít re-render)
- Code gọn hơn controlled input
- Dễ tích hợp validation
- Dễ scale form lớn

Muốn thành thạo RHF → thực hành:

- Login form
- Register form (confirm password)
- Async check email
- Dynamic field array
- Multi-step form
- Schema validation
