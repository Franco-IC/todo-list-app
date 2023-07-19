import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SlideAnimation from "./animations/SlideIn.jsx";

export default function TasksPagination({
  numberOfPages,
  currentPage,
  setCurrentPage,
}) {
  return (
    <section className="text-white mt-auto mb-4 self-end lg:mr-8 ">
      <SlideAnimation>
        <nav>
          <ul className="flex justify-center gap-3 transition-all ">
            {numberOfPages > 2 && currentPage > 1 && (
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="h-10"
                >
                  <ArrowBackIcon />
                </button>
              </li>
            )}

            {Array.from({ length: numberOfPages }, (_, i) => (
              <li key={i}>
                <button
                  onClick={() => setCurrentPage(i + 1)}
                  className={`bg-violet-600 hover:bg-violet-800 px-4 h-10 w-fit rounded-xl transition-all ${
                    i + 1 === currentPage
                      ? " bg-violet-800 hover:bg-violet-600 border border-solid border-stone-300"
                      : ""
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            ))}

            {numberOfPages > 2 && currentPage < numberOfPages && (
              <li>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  onKeyDownCapture={(e) => console.log(e)}
                  className="h-10"
                >
                  <ArrowForwardIcon />
                </button>
              </li>
            )}
          </ul>
        </nav>
      </SlideAnimation>
    </section>
  );
}
