import { LeagueResponse } from '@/types/league';
import UpdateLeagueForm from '../forms/UpdateLeagueForm';

type Props = {
    league: LeagueResponse;
    onClose: () => void;
}

const UpdateLeagueModal = ({ league, onClose }: Props) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="w-full max-w-2xl rounded bg-[#111517] p-6 text-white">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Ligi Güncelle</h2>
                    <button
                        onClick={onClose}
                        className="cursor-pointer text-xl text-gray-400 hover:text-white"
                    >
                        ✕
                    </button>
                </div>

                <UpdateLeagueForm league={league} onClose={onClose} />
            </div>
        </div>
    )
}

export default UpdateLeagueModal
