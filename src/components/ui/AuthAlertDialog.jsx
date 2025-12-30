import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
  export function AuthAlert({ children }) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {children}
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-[400px] rounded-3xl p-10">
          <AlertDialogCancel className="absolute right-6 top-6 border-none bg-transparent hover:bg-transparent text-xl">
            ✕
          </AlertDialogCancel>
          
          <AlertDialogHeader className="items-center text-center space-y-4">
            <AlertDialogTitle className="text-3xl font-bold leading-tight">
              Create an account to continue
            </AlertDialogTitle>
            
            <div className="py-2 w-full">
               <AlertDialogAction className="w-full py-7 text-lg font-bold rounded-full bg-black hover:bg-zinc-800 transition-all">
                  Create account
               </AlertDialogAction>
            </div>
  
            <AlertDialogDescription className="text-base text-zinc-500">
              Already have an account? <span className="underline font-bold text-black cursor-pointer">Log in</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    )
  }