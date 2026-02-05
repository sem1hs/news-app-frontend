"use client";

import { FixtureResponse } from "@/types/fixture";
import UpdateFixtureForm from "../forms/UpdateFixtureForm";

interface Props {
    fixture: FixtureResponse;
    onClose: () => void;
}

export default function UpdateFixtureModal({ fixture, onClose }: Props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="w-full max-w-2xl rounded bg-[#111517] p-6 text-white">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Fikstürü Güncelle</h2>
                    <button
                        onClick={onClose}
                        className="cursor-pointer text-xl text-gray-400 hover:text-white"
                    >
                        ✕
                    </button>
                </div>

                <UpdateFixtureForm fixture={fixture} onClose={onClose} />
            </div>
        </div>
    );
}
