import "./Pagination.css";

export function Pagination({
    currentPage,
    limit,
    listVideoGames,
    setCurrentPage,
}) {
    const numbersPage = [];
    const totalPaginationNums = 5;
    const pagesShowed = Math.ceil(listVideoGames.length / limit); // 20/2 = 10

    if (pagesShowed <= totalPaginationNums) {
        // Si las paginas a mostrar es menor que el total a querer a mostrar se muestran todos los numeros
        for (let i = 1; i <= pagesShowed; i++) {
            console.log(i);
            numbersPage.push(i);
        }
    } else {
        //Dinamic pagination cada que se actualiza current page el componente se renderiza

        // Guarda el indice en la izquierda el mayor entre 2 y la pagina actual - 1
        let leftPages = Math.max(2, currentPage - 1) // max(2, 1 - 1) = 2 /  max(2, 4 - 1) = 3

        // Guarda el indice en la derecha el menor entre las paginas mostradas - 1 y la pagina actual + 1
        let rightPages = Math.min(pagesShowed - 1, currentPage + 1) // min(10 - 1, 1 + 1) = (9, 2) = 2 / min(10 - 1, 4 + 1) = (9, 5) = 5

        numbersPage.push(1);

        // Si el indice de la izquierda es mayor que 2 agrega ...
        if (leftPages > 2) { // 2 > 2 (omite) / 3 > 2 (aplica)
            numbersPage.push("...")
        }

        // Agrega los numeros intermedios
        for (let i = leftPages; i <= rightPages; i++) { // i = 2; i <= 2; i++ / i = 3; i <= 5; i++   
            numbersPage.push(i); // 2 / 3 | 4 | 5
        }
        

        if (rightPages < pagesShowed - 1) { //2 < 10 - 1 -> 2 < 9 (No omite) / 5 < 9 (aplica)
            numbersPage.push("...") //Agrega ...
        }

        numbersPage.push(pagesShowed)
    }

    console.log(numbersPage)

    return (
        <div className="pagination-container">
            <button
                onClick={() =>
                    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
                }
            >
                Prev
            </button>
            {numbersPage.map((number, index) =>
                number === "..." ? (
                    <span key={index}>{number}</span>
                ) : (
                    <div
                        key={index}
                        className={
                            currentPage === number
                                ? "pagination-nums active"
                                : "pagination-nums"
                        }
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </div>
                )
            )}
            <button
                onClick={() =>
                    setCurrentPage((currentPage) =>
                        Math.min(currentPage + 1, pagesShowed)
                    )
                }
            >
                Next
            </button>
        </div>
    );
}
