import { useForm } from "react-hook-form";
import { type CertificationForm } from "@/utils/types/freelancer-profile";

function AddCertificationModal({
  data: { modalOpen, setModalOpen, handleModalData },
}: {
  data: { modalOpen: boolean; setModalOpen: any; handleModalData: any };
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CertificationForm>();
  function closeModal() {
    setModalOpen(false);
    reset();
  }
  function submitForm(e: CertificationForm) {
    handleModalData(e);
    reset();
  }
  return (
    <>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          modalOpen ? "" : "hidden"
        } overflow-y-auto bg-black/[0.2] overflow-x-hidden fixed -top-2 right-0 left-30 z-50 justify-center items-center w-full md:inset-0 h-full`}
      >
        <div className="relative p-4 w-full m-auto max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add Certification
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form onSubmit={handleSubmit(submitForm)}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    {...register("certificateName")}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Certified Web 3.0 & Metaverse Developer"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Ex. Coursera, Udemy"
                    {...register("organization")}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Credentials ID (Optional)
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder=""
                    {...register("credentialID")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date of completion
                  </label>
                  <input
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    {...register("date")}
                    required
                  />
                </div>

                <div className="col-span-2 flex items-center justify-end space-x-5">
                  <button
                    className="underline underline-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button className="primaryButton" type="submit">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddCertificationModal;
