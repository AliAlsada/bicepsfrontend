

export const SetType = () => {
    return <>
        <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn bg-slate-100">1</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Warm up</a></li>
                <li><a>Drop set</a></li>
                <li><a>Failure</a></li>
            </ul>
        </div>
    </>
}

