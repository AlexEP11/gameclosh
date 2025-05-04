import { deleteUserReview } from "@/api/reviews/delete-user-review";

interface Props {
    setOpenModal: (bool: boolean) => void;
    id: number;
}

export const ReviewModalDelete = ({ setOpenModal, id }: Props) => {
    const handleDelete = async () => {
        await deleteUserReview(id);
        setOpenModal(false);
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
                className="fixed inset-0 bg-black/70 transition-opacity"
                aria-hidden="true"
                onClick={() => setOpenModal(false)}
            />

            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative transform overflow-hidden rounded-lg bg-neutral-800 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 sm:mx-0 sm:h-10 sm:w-10">
                                <svg
                                    className="h-6 w-6 text-red-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>

                            {/* Texto del modal */}
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg font-medium leading-6 text-white">
                                    Eliminar reseña
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-300">
                                        ¿Estás seguro que deseas eliminar esta
                                        reseña? Esta acción no se puede
                                        deshacer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-neutral-900/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="cursor-pointer inline-flex w-full justify-center bg-neutral-900 rounded-md px-4 py-2 text-base font-semibold text-white shadow-sm sm:ml-3 sm:w-auto sm:text-sm transition-all duration-300 hover:bg-red-500"
                        >
                            Eliminar
                        </button>
                        <button
                            type="button"
                            onClick={() => setOpenModal(false)}
                            className="cursor-pointer mt-3 inline-flex w-full justify-center rounded-md  bg-neutral-800 px-4 py-2 text-base font-medium text-gray-300 shadow-sm hover:bg-neutral-700 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
