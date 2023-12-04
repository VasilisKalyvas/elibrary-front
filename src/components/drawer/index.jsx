import React from 'react'

const SideDrawer = ({
    widthClassName = 'w-[320px]', 
    onClose,
    onApply,
    onReset,
    body = 'Body',
    header = 'Header'
}) => {

  return (
    <main
        className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out "
        }
    >
        <section
            className={
                `right-0 absolute bg-white h-full shadow-xl delay-150 duration-300 ease-in-out transition-[right] transform  
                ${widthClassName}`
            }
        >
            <article className="relative flex flex-col h-full">
                <header className="p-4 font-bold text-lg">
                    {header}
                </header>
                <div className="pt-1 pl-4 pr-4 flex-grow">
                    {body}
                </div>
                <div className="flex items-center justify-end p-4 gap-2">
                    {
                        onReset
                        ?
                            <button className="bg-blue-500 hover:bg-blue-700
                                text-white font-bold py-2 px-4 rounded"
                                onClick={onReset}>
                                    Reset
                            </button>
                        : null
                    }
                    {
                        onApply 
                        ?
                            <button className="bg-green-500 hover:bg-green-700
                                text-white font-bold py-2 px-4 rounded"
                                onClick={onApply}>
                                    Apply
                            </button>
                        : null
                    }
                    <button className="bg-red-500 hover:bg-red-700
                        text-white font-bold py-2 px-4 rounded"
                        onClick={onClose}>
                        Close
                    </button>
                </div>
            </article>
        </section>
        <section
            className=" w-screen h-full cursor-pointer "
            onClick={onClose}
        />
  </main>
  )
}

export default SideDrawer