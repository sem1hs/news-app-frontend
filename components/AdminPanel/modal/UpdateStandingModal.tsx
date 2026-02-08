import { StandingResponse } from "@/types/standing";
import UpdateStandingForm from "../forms/UpdateStandingForm";

interface Props {
    standing: StandingResponse;
    onClose: () => void;
}

const UpdateStandingModal = ({ standing, onClose }: Props) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="w-full max-w-2xl rounded bg-[#111517] p-6 text-white">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Puan Durumunu Güncelle</h2>
                    <button
                        onClick={onClose}
                        className="cursor-pointer text-xl text-gray-400 hover:text-white"
                    >
                        ✕
                    </button>
                </div>

                <UpdateStandingForm standing={standing} onClose={onClose} />
            </div>
        </div>
    );
}

export default UpdateStandingModal
