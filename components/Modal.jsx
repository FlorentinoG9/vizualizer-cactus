import { useContext, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MaterialContext } from '../contexts/MaterialContext';
import Image from 'next/image';

export default function Modal({ isOpen, closeModal }) {
	const { pallet, addLayer } = useContext(MaterialContext);

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as='div'
				className='absolute top-0 bottom-0 right-0'
				open={isOpen}
				onClose={closeModal}
			>
				<div className='min-h-screen px-4 text-center'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Dialog.Overlay className='fixed inset-0 bg-black/40' />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className='inline-block h-screen align-middle'
						aria-hidden='true'
					>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<div className='inline-flex w-full max-w-sm h-[685px] flex-col justify-between items-center p-6 space-y-3 align-middle transition-all transform rounded-2xl'>
							<a className='text-white p-3 flex justify-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 md:h-10 md:w-10'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M5 15l7-7 7 7'
									/>
								</svg>
							</a>
							<div className='max-h-[445px] overflow-y-auto my-5'>
								<div className='flex flex-col space-y-4 '>
									{pallet.length &&
										pallet[0].materials.map(
											({ id, name, thumbnail, layer }) => {
												return (
													<button
														id={name}
														key={id}
														onClick={() => addLayer(layer)}
														className='flex justify-end items-center text-transparent hover:text-gray-700 hover:bg-white/70 p-2 rounded-md'
													>
														<p >{name}</p>
														<div className='w-24 h-24 ml-3 border-4 rounded-md'>
															<Image src={thumbnail} width={180} height={180} />
														</div>
													</button>
												);
											},
										)}
								</div>
							</div>
							<a className='text-white p-3 flex justify-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6 md:h-10 md:w-10'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M19 9l-7 7-7-7'
									/>
								</svg>
							</a>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
