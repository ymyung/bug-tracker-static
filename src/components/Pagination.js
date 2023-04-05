import React from 'react'

import './Pagination.scss'

const Pagination = ({ postsPerPage, currentProject, paginate, paginatePrev, paginateNext, currentPage }) => {
    const pageNumbers = []

    if (currentProject) {
        for (let i = 1; i <= Math.ceil(currentProject.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }}

    return (
        <div className='myticket-buttons'>
            <button disabled={currentPage === 1} type='button' className="myticket-button myticket-previous" onClick={() => paginatePrev()}>Prev</button>
            <ul className="pagination">
                {pageNumbers.map(number => {
                    if (number === currentPage) {
                        return (
                        <li onClick={() => paginate(number)} key={number} className='page-item-on'>
                            <a href="#" className='page-link'>
                                {number}
                            </a>
                        </li>
                    )} else {
                        return (
                        <li onClick={() => paginate(number)} key={number} className='page-item'>
                            <a href="#" className='page-link'>
                                {number}
                            </a>
                        </li>
                    )}
                })}
            </ul>
            <button disabled={currentPage === pageNumbers.length} type='button' className="myticket-button myticket-next" onClick={() => paginateNext()}>Next</button>
        </div>
    )
}

export default Pagination