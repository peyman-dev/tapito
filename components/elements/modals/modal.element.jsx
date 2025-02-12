import { createContext, useState, useContext } from "react"
import { Modal, ModalContent, ModalBody } from "@heroui/modal"
import { XCircle } from "lucide-react"

const ModalContext = createContext()

export function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)
    const [modalSize, setModalSize] = useState("lg")
    const [onCloseCallback, setOnCloseCallback] = useState(null)

    const openModal = (content, options = {}) => {
        setModalContent(content)
        setOnCloseCallback(() => options.onClose)
        if (options.size) {
            setModalSize(options.size)
        }
        setIsOpen(true)
    }

    const closeModal = (action) => {
        setIsOpen(false)
        setModalContent(null)
        
        if (action) {
            action()
        }
        
        if (onCloseCallback) {
            onCloseCallback()
            setOnCloseCallback(null) 
        }
    }

    return (
        <ModalContext.Provider value={{ openModal, closeModal, setModalSize }}>
            {children}
            <Modal
                hideCloseButton
                size={modalSize}
                isOpen={isOpen}
                onClose={closeModal}
                className="!p-0 child:!p-0"
            >
                <ModalContent className="!p-0 child:!p-0">
                    <ModalBody>{modalContent}</ModalBody>
                </ModalContent>
            </Modal>
        </ModalContext.Provider>
    )
}

export function useModal() {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider")
    }
    return context
}