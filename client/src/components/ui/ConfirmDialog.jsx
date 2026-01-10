import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export function ConfirmDialog({
  onConfirm,
  children,
  title,
  description,
  confirmText,
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogContent className="not-prose !max-w-[500px] rounded-[16px] bg-white border-none shadow-2xl p-0 overflow-hidden">
        <AlertDialogCancel className="absolute right-4 top-4 border-none bg-transparent hover:bg-zinc-100 rounded-full w-10 h-10 p-0 transition-colors text-xl">
          ✕
        </AlertDialogCancel>

        {/* 2. เนื้อหาตรงกลาง */}
        <AlertDialogHeader className="flex flex-col items-center text-center pt-12 pb-6 px-10 space-y-4">
          <AlertDialogTitle className="text-[28px] font-bold text-zinc-900 tracking-tight">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[17px] text-zinc-500 font-medium leading-relaxed">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* 3. ปุ่ม Footer (Cancel สีขาว / Confirm สีดำ) */}
        <AlertDialogFooter className="flex flex-row justify-center items-center gap-4 px-10 pb-12 sm:justify-center">
          <AlertDialogCancel className="flex-1 py-7 !rounded-full border border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 font-bold transition-all text-base mt-0 shadow-sm cursor-pointer">
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={onConfirm}
            className="flex-1 py-7 text-base font-bold !rounded-full bg-[#26231E] text-white hover:bg-black transition-all active:scale-95 border-none shadow-md cursor-pointer"
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
