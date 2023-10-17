
type props = {
  msg: string | undefined
}

export const AlertError = ({msg}:props) => {
  return (
    <div className="mt-2 rounded-md bg-red-50 p-2 text-sm text-red-500"><b>Error</b> {msg}</div>
  )
}
