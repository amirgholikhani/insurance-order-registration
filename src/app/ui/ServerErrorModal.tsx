import { memo } from "react"
interface ServerErrorModalProps {
  ref: React.RefObject<HTMLDialogElement | null>
  handleCloseModal: () => void
  handleSubmit: () => void
  loading: boolean
}

function ServerErrorModal({ ref, handleCloseModal, handleSubmit, loading }: ServerErrorModalProps) {

  return (
    <dialog ref={ref} id="my_modal_5" className="modal modal-bottom max-w-[360px] justify-self-center">
      <div className="modal-box rounded-none p-0 pt-2.5 flex flex-col gap-2">
        <div className="flex flex-col gap-2 py-2 px-3">
          <h3 className="text-[16px] font-[500]">متاسفانه در ثبت اطلاعات شما، خطایی رخ داده است.</h3>
          <p className="text-[14px] font-[400]">مجددا، تلاش کنید.</p>
        </div>
        <div className="p-2.5 shadow-[0px_3px_15px_3px_#2222221A] flex gap-2.5">
          <button className="flex-1 btn btn-secondary" onClick={handleSubmit} disabled={loading}>
            {loading && <span className="loading loading-spinner loading-xs"></span>}
            تلاش مجدد
          </button>
          <button className="flex-1 btn btn-secondary btn-outline" onClick={handleCloseModal} disabled={loading}>بازگشت</button>
        </div>
      </div>
    </dialog>
  )
}

export default memo(ServerErrorModal)
