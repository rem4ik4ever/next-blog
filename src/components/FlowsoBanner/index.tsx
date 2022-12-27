import React, { useEffect } from 'react';
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/core"
import MyLink from 'src/utils/MyLink';
import Link from 'next/link';
import Image from 'next/image';

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
              <MyLink href="https://resolveai.co">
                <h1 className="font-bold">ResolveAI</h1>
              </MyLink>
              <div>
                <MyLink href="https://resolveai.co">
                  <Image src="/banner.png" layout='fixed' height={300} width={400} />
                </MyLink>
              </div>
              <div className="flex justify-center pt-4">
                <MyLink href="https://resolveai.co" target="_blank">
                  <div
                    className="text-xl border rounded-md bg-orange-400 text-white px-3 py-2 mx-auto hover:bg-orange-300 transition-all">
                    Learn more
                  </div>
                </MyLink>
              </div>
            </div>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
