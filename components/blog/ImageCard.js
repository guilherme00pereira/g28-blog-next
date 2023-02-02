export default function ImageCard({ children }) {
    return (
    <div className="my-6 mx-24 flex flex-row justify-center rounded-xl border border-slate-400 bg-slate-200 dark:border-gray-800 dark:bg-wrapper-dark">
            {children}
        </div>
    )
}
