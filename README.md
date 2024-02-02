# click-outside-ts

> React hook to handle click outside an element with capabilities use "Esc" key to close modal.
> 
> Works on mobile screens for touch events.

## Install

```bash
npm install click-outside-ts
```

## Usage click outside and key press Esc to close modal

```tsx
import { useState } from "react";
import useClickOutside from "click-outside-ts";

const Modal = () => {
    const modalRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    
    const modalOpen = () => {
        setIsOpen(true);
    };

    const modalClose = () => {
        setIsOpen(false);
    };
    
    useClickOutside(modalRef, modalClose);

    return (
        <div>
            <div className="modal-button" onClick={modalOpen}>
                Open modal
            </div>
            {isOpen && (
                <div className="modal-container">
                    <div className="modal" ref={modalRef}>
                        <h2>Modal message</h2>
                        <div className="modal-button" onClick={modalClose}>
                            Close modal
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
```

```css
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  color: #242424;
}

.modal-button {
  text-align: center;
  margin: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
}
```

## License and Author
MIT © [Artsiom Pchaliankou](https://github.com/ArtemPchela)
***

## Show your support
Give a ⭐️ if this project helped you!

<div style="height: 60px!important; width: 150px!important;">
<a href="https://www.buymeacoffee.com/timdev" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"></a>
</div>




