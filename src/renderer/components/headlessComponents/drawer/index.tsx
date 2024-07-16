import {
  Fragment,
  ReactElement,
  ReactNode,
  cloneElement,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface DrawerProps {
  trigger: ReactElement;
  title?: ReactNode;
  icon?: ReactNode;
}

export default function Drawer({
  trigger,
  title = null,
  icon = null,
}: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const triggerNode = useMemo(() => {
    if (trigger) {
      const { onClick } = trigger.props;
      return cloneElement(trigger, {
        onClick(event: MouseEvent) {
          onClick?.(event);
          openModal();
        },
      });
    }
    return null;
  }, [trigger, openModal]);

  return (
    <>
      {triggerNode}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto overflow-x-hidden">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-x-8"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-8"
              >
                <Dialog.Panel className="w-full max-w-md absolute right-[18px] top-[20px] h-[calc(100vh_-_40px)] blurImg transform overflow-hidden rounded-lg bg-white/80 dark:bg-[#32344f]/90 backdrop-blur-xl backdrop-saturate-200 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg flex items-center justify-between font-medium leading-6"
                  >
                    {title}
                    {icon}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm opacity-65">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
