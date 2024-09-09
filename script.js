// const philosophyContent = document.getElementById('philosophyContent');
//         const headers = philosophyContent.querySelectorAll('h3');

//         window.addEventListener('scroll', highlightClosestHeader);

//         function highlightClosestHeader() {
//             const middleOfScreen = window.innerHeight / 2;
//             let closestHeader = null;
//             let closestDistance = Infinity;

//             headers.forEach(header => {
//                 const headerRect = header.getBoundingClientRect();
//                 const headerMiddle = headerRect.top + headerRect.height / 2;
//                 const distance = Math.abs(middleOfScreen - headerMiddle);

//                 if (distance < closestDistance) {
//                     closestDistance = distance;
//                     closestHeader = header;
//                 }

//                 header.classList.remove('highlight');
//             });

//             if (closestHeader) {
//                 closestHeader.classList.add('highlight');
//             }
//         }

        const squares = document.getElementById('squares');
        const indicator = document.getElementById('indicator');
        const squareCount = document.querySelectorAll('.square').length;
        const squareWidth = 520; // 300px + 10px margin
        let currentPosition = 0;
        let myVariable;

        function updateVariable() {
            if (window.innerWidth > 1000) {
                myVariable = 7;
            } else {
                myVariable = 5;
            }
            console.log(`Zmiana myVariable na: ${myVariable}`);
        }
        
        updateVariable();
        window.addEventListener('resize', updateVariable);

        document.getElementById('rightArrow').addEventListener('click', () => {
            if (currentPosition < squareCount - myVariable) {
                currentPosition++;
                updatePosition();
            }
        });

        document.getElementById('leftArrow').addEventListener('click', () => {
            if (currentPosition > 0) {
                currentPosition--;
                updatePosition();
            }
        });

        function updatePosition() {
            squares.style.transform = `translateX(${-currentPosition * squareWidth}px)`;
            updateIndicator();
        }

        function updateIndicator() {
            const indicatorWidth = indicator.offsetWidth;
            const maxLeft = indicatorWidth - (indicatorWidth / 3);
            const newLeft = (currentPosition / (squareCount - 1)) * maxLeft;
            indicator.querySelector('::after').style.left = `${newLeft}px`;
        }

        updateIndicator();