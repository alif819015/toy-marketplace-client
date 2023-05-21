import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateToy = () => {
  const toy = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    image,
    price,
    toyName,
    quantity,
    description,
    seller,
  } = toy;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/postToys/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
    if (data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Toy Updated Success fully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <div className="hero text-black min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Toy Data Update</h1>
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
                      defaultValue={image}
                    />
                    <input
                      className="text-input"
                      placeholder="seller"
                      {...register("seller", { required: true })}
                      defaultValue={seller}
                    />
                    <input
                      className="text-input"
                      placeholder="toyName"
                      {...register("toyName", { required: true })}
                      defaultValue={toyName}
                    />
                    <input
                      className="text-input"
                      placeholder="your email"
                      {...register("email", { required: true })}
                      type="email"
                      value={user?.email}
                    />
                    <input
                      className="text-input"
                      placeholder="price"
                      {...register("price", { required: true })}
                      defaultValue={price}
                    />
                    <input
                      className="text-input"
                      placeholder="quantity"
                      {...register("quantity", { required: true })}
                      defaultValue={quantity}
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
                      defaultValue={description}
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
                        <select {...register("color")}>
                          <option value="red">Red</option>
                          <option value="black">Black</option>
                          <option value="white">White</option>
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

export default UpdateToy;
