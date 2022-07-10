import React, { useEffect } from 'react';
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/core"
import MyLink from 'src/utils/MyLink';
import Link from 'next/link';

const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

export function FlowsoBanner() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  useEffect(() => {
    const lastShown = localStorage.getItem('_flows_banner_ls')
    if (!lastShown || Date.now() > parseInt(lastShown)) {
      onOpen()
      localStorage.setItem('_flows_banner_ls', (Date.now() + SEVEN_DAYS).toString())
    }
  }, [])

  return (
    <>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <div className="text-center">
              <h2 className="font-bold text-2xl py-2">
                Looking for email automation?
              </h2>
              <p className="font-bold text-4xl">
                Checkout <MyLink href="https://flows.so">
                  <span className="text-orange-400">Flows</span>
                </MyLink>
              </p>
              <div className="text-left pt-8 text-2xl">
                <h4 className="font-bold">
                  There you can:
                </h4>
                <ul>
                  <li className="py-2">Create awesome forms</li>
                  <li className="py-2">Design campaigns and emails</li>
                  <li className="py-2">Track analytics and reports</li>
                  <li className="py-2">Create your own email flows</li>
                </ul>
                <p className='text-center py-2 font-bold'>
                  Interested!?
                </p>
                <div className="flex justify-center pt-4">
                  <MyLink href="https://flows.so">
                    <div
                      className="text-xl border rounded-md bg-orange-400 text-white px-3 py-2 mx-auto hover:bg-orange-300 transition-all">

                      Yes! I'm interested!
                    </div>
                  </MyLink>
                </div>
              </div>
            </div>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
