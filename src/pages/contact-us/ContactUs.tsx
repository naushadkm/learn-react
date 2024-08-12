import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "test@email.com",
    },
  });
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw Error();
    } catch (error) {
      setError("root", {
        message: "Email already taken!",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("email", {
            required: "Email Required!",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email is invalid";
              }
              return true;
            },
          })}
          type="text"
          placeholder="Email"
        ></input>
      </div>
      <div>{errors.email && <div>{errors.email.message}</div>}</div>
      <div>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Minimum 8 characters required.",
            },
          })}
          type="password"
          placeholder="Password"
        ></input>
      </div>
      <div>{errors.password && <div>{errors.password.message}</div>}</div>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading" : "Submit"}
      </button>
      <div>{errors.root && <div>{errors.root.message}</div>}</div>
    </form>
  );
};
