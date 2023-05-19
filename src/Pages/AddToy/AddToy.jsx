import { useForm } from "react-hook-form";
import "./AddToy.css";

const AddToy = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="hero text-black min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Add Toy</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <div className="md:ml-4">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      className="text-input"
                      placeholder="photo url"
                      {...register("image", { required: true })}
                      type="url"
                    />
                    <input
                      className="text-input"
                      placeholder="name"
                      {...register("name", { required: true })}
                    />
                    <input
                      className="text-input"
                      placeholder="price"
                      {...register("price", { required: true })}
                    />
                    <input
                      className="text-input"
                      placeholder="your email"
                      {...register("email", { required: true })}
                      type="email"
                    />
                    <input
                      className="text-input"
                      placeholder="date"
                      {...register("date", { required: true })}
                      type="date"
                    />
                    <input
                      className="text-input"
                      placeholder="description"
                      {...register("description", { required: true })}
                    />
                    <br />
                    <div className="flex">
                      <div className=" ml-1 text-option">
                        <select {...register("category")}>
                          <option value="marvel">Marvel</option>
                          <option value="avengers">Avengers</option>
                          <option value="transformers">Transformers</option>
                        </select>
                      </div>
                      <div className=" ml-1 text-option">
                        <select {...register("size")}>
                          <option value="s">S</option>
                          <option value="m">M</option>
                          <option value="l">L</option>
                        </select>
                      </div>
                      <div className=" ml-1 text-option">
                        <select {...register("retting")}>
                          <option value="1.0">1.0</option>
                          <option value="2.0">2.0</option>
                          <option value="3.0">3.0</option>
                          <option value="4.0">4.0</option>
                          <option value="5.0">5.0</option>
                        </select>
                      </div>
                    </div>

                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    {/* <input
                      className="submit-btn"
                      value="Post Job"
                      type="submit"
                    /> */}
                    <div className="form-control mt-6">
                      <input className="btn btn-primary" type="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
