import '@typeform/embed/build/css/popup.css';
import { useEffect } from 'react';

const TypeformEmbed = () => {
     useEffect(() => {
          const launchButton = document.getElementById("floating-typeform-button");

          if (launchButton) {
               launchButton.addEventListener("click", async () => {
                    const { createPopup } = await import('@typeform/embed');

                    const popup = createPopup("https://form.typeform.com/to/m3VpWJW5", {
                         autoClose: 3000,
                         hideHeaders: true,
                         hideFooter: false,
                         onSubmit: () => {
                              console.log("Form submitted!");
                         }
                    });

                    popup.open(); 
               });
          }

          return () => {
               launchButton?.removeEventListener("click", () => { });
          };
     }, []);

     return (
          <button
               id="floating-typeform-button"
               className="fixed bottom-1 right-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full shadow-lg z-50"
          >
               Take Test
          </button>
     );
};

export default TypeformEmbed;

