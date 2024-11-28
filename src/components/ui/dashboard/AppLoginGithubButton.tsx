import { FaGithub } from "react-icons/fa"

export const AppLoginGithubButton = ({ onClick }: { onClick: () => void }) => {
    return (
            <button 
                className="w-full rounded-md justify-between align-middle justify-items-center bg-gray-50 dark:bg-gray-900  hover:bg-gray-200 dark:hover:bg-gray-800 py-3 text-black  dark:text-white" 
                onClick={onClick}
            >
                Sign in with GitHub
                <FaGithub />
            </button>
    )
}           

