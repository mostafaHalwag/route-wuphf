import * as zod from "zod";

export const RegisterScheme = zod.object({
    name: zod
        .string()
        .nonempty("This field is required")
        .min(2, "Minimum length is 2 characters!")
        .max(10, "Maximum length is 10 characters!"),
    email: zod.string().email("Please enter a valid email address"),
    password: zod
        .string()
        .nonempty("This field is required")
        .min(8, "Password must be 8 characters or longer")
        .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Invalid password format"),
    rePassword: zod
        .string()
        .nonempty("This field is required"),
    gender: zod.enum(["male", "female"]),
    dateOfBirth: zod.coerce.string().nonempty("This field is required"),
}).refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    message: "Passwords do not match",
});