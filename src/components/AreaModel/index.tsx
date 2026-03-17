type Props = {
  label: string;
  className?: string;
}

export default function AreaModel({label, className}: Props){

  return (
    <div className={`w-50 h-50 bg-red-500 ${className}`}>
      {label}
    </div>
  )

}