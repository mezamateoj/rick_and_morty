
export default function Pagination({ charsPerPage, totalPosts , paginate}) {
    // const pageNumbers = [...Array(pages + 1).keys()].slice(1)


    // const nextPage = () => {
    //     if(currentPage !== pages) setCurrentPage(currentPage + 1)
    // }

    // const prevPage = () => {
    //     if(currentPage !== 1) setCurrentPage(currentPage - 1)
    // }
    const pageNumbers = [];
 
    for (let i = 1; i <= Math.ceil(totalPosts / charsPerPage); i++) {
       pageNumbers.push(i);
    }
  

  return (
    <div className="pagination-container">
    <ul className="pagination">
       {pageNumbers.map((number) => (
          <li
             key={number}
             onClick={() => paginate(number)}
             className="page-number"
          >
             {number}
          </li>
       ))}
    </ul>
 </div>
  );
}