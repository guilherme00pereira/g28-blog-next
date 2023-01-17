export default function ImageCard({ children }) {
    return (
        <div className="flex flex-row justify-center my-6 mx-24 dark:bg-wrapper-dark dark:border-gray-800 border rounded-xl">
            {children}
        </div>
    )
}
