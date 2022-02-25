/* This example requires Tailwind CSS v2.0+ */
import {
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  EyeOffIcon,
} from "@heroicons/react/outline";


export default function Advantages() {
  return (
    <div className="py-12 bg-l-3 dark:bg-d-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What do we offer to our costumers:
          </p>
        </div>

        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            <div className="rounded-lg overflow-hidden shadow-lg bg-l-2 dark:bg-d-2 pt-8">
              <ShieldCheckIcon className="w-24 h-24 m-auto"/>
              <div className="px-6 py-4">
                <div className="text-black font-bold text-xl mb-2 text-center">Safe</div>
                <p className="text-white text-center text-base">You do not need to be concerned about being banned from using our services.You will never be banned for requesting a boost because we will ensure the security of this process as well as your account.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-l-2 dark:bg-d-2 pt-8">
              <ClockIcon className="w-24 h-24 m-auto"/>
              <div className="px-6 py-4">
                <div className="text-black font-bold text-xl mb-2 text-center">Speed</div>
                <p className="text-white text-center text-base">After we start your order it will be done in no time, a match can take up to 5 minutes.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-l-2 dark:bg-d-2 pt-8">
              <CurrencyDollarIcon className="w-24 h-24 m-auto"/>
              <div className="px-6 py-4">
                <div className="text-black font-bold text-xl mb-2 text-center">Cheap</div>
                <p className="text-white text-center text-base">Despite the fact that we are a premium service, we make our assistance affordable to everyone.</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-l-2 dark:bg-d-2 pt-8">
              <EyeOffIcon className="w-24 h-24 m-auto"/>
              <div className="px-6 py-4">
                <div className="text-black font-bold text-xl mb-2 text-center">Privacy</div>
                <p className="text-white text-center text-base">No one will be aware that you are using our services. It is our priority to ensure your comfort and privacy.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
