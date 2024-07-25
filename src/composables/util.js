import { ElMessage, ElMessageBox } from 'element-plus'

export function toast(message, type = "success") {
    ElMessage({
        message,
        type
    })
}

export function showModal(content = "提示内容", type = "warning", title = "") {
    return ElMessageBox.confirm(
        content,
        title,
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type
        }
    )
}