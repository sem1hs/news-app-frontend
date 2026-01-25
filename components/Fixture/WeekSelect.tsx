type Props = {
  value: number;
  onChange: (week: number) => void;
  maxWeek?: number;
};

const WeekSelect = ({ value, onChange, maxWeek = 38 }: Props) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="bg-[#111517] border border-white/10 rounded-md px-3 py-2 text-sm text-white outline-none"
    >
      {Array.from({ length: maxWeek }, (_, i) => i + 1).map((week) => (
        <option key={week} value={week}>
          {week}. Hafta
        </option>
      ))}
    </select>
  );
};

export default WeekSelect;
