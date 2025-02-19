import Image from 'next/image'
import Medal_Gold from '../../assets/Medal_Gold.svg'
import Medal_Silver from '../../assets/Medal_Silver.svg'
import Medal_Bronze from '../../assets/Metal_Bronze.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 leading-none font-heading font-semibold text-xl">
        Ranking de indicações
      </h2>

      <div className="relative space-y-4">
        <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm leading-none text-gray-200">
            <span className="font-semibold">1°</span> | Usuario
          </span>

          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            31232
          </span>

          <Image src={Medal_Gold} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
      <div className="relative space-y-4">
        <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm leading-none text-gray-200">
            <span className="font-semibold">2°</span> | Usuario
          </span>

          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            31232
          </span>

          <Image src={Medal_Silver} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
      <div className="relative space-y-4">
        <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm leading-none text-gray-200">
            <span className="font-semibold">3°</span> | Usuario
          </span>

          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            31232
          </span>

          <Image src={Medal_Bronze} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
