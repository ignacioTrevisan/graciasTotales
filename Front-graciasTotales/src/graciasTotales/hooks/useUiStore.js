import { useDispatch, useSelector } from "react-redux"
import { closeModal, closeQuery, closeSidebar, isModalCreating, isModalEditing, openModal, openQuery, openSidebar } from "../../store/ui/uiSlice";

export const UseUiStore = () => {
    const dispatch = useDispatch();
    const { modalOpen, modalEditing, sidebarOpen, queryOpen } = useSelector(state => state.ui);

    const isEditing = () => {
        dispatch(isModalEditing())
    }
    const isNotEditing = () => {
        dispatch(isModalCreating())
    }
    const onModalOpen = () => {
        dispatch(openModal())
    }
    const onModalClose = () => {
        dispatch(closeModal())
    }

    const onSidebarOpen = () => {
        dispatch(openSidebar())
    }
    const onSidebarClose = () => {
        dispatch(closeSidebar())
    }


    const onQueryrOpen = () => {
        dispatch(openQuery())
    }
    const onQueryClose = () => {
        dispatch(closeQuery())
    }
    return {
        isNotEditing,
        isEditing,
        onModalOpen,
        onSidebarOpen,
        onSidebarClose,
        onModalClose,
        onQueryrOpen,
        onQueryClose,
        modalOpen,
        modalEditing,
        sidebarOpen,
        queryOpen

    }
}