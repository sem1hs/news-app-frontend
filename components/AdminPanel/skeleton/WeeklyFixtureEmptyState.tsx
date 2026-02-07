type Props = {
    title: string;
    description: string;
}

export default function FixtureEmptyState({ title, description }: Props) {
    return (
        <div className="mt-10 rounded-lg border border-white/10 bg-[#111517] px-6 py-12 text-center text-white">
            <h2 className="text-lg font-semibold mb-2">
                {title}
            </h2>
            <p className="text-sm text-white/70">
                {description}
            </p>
        </div>
    );
}
