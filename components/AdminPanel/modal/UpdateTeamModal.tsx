import { TeamResponse } from '@/types/teams';
import UpdateTeamForm from '../forms/UpdateTeamForm';

type Props = {
    team: TeamResponse;
    onClose: () => void;
}

const UpdateTeamModal = ({ team, onClose }: Props) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="w-full max-w-2xl rounded bg-[#111517] p-6 text-white">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Takımı Güncelle</h2>
                    <button
                        onClick={onClose}
                        className="cursor-pointer text-xl text-gray-400 hover:text-white"
                    >
                        ✕
                    </button>
                </div>

                <UpdateTeamForm team={team} onClose={onClose} />
            </div>
        </div>
    )
}

export default UpdateTeamModal
