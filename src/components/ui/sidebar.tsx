import { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        "h-screen px-4 py-4 hidden md:flex md:flex-col bg-transparent w-[300px] flex-shrink-0 fixed left-0 top-0 z-40 border-r border-neutral-800/50",
        className
      )}
      animate={{
        width: animate ? (open ? "300px" : "70px") : "300px",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {/* ✅ LOGO qo‘shildi */}
      <Link to="/" className="flex items-center justify-center mb-6">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
        {open && (
          <span className="ml-2 text-white text-lg font-bold whitespace-nowrap">
            Arx dexium
          </span>
        )}
      </Link>

      {/* Sidebar tarkibi */}
      <div className="flex flex-col gap-2">{children}</div>
    </motion.div>
  );
};


export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-16 px-4 flex flex-row md:hidden items-center justify-between bg-transparent w-full fixed top-0 left-0 z-50"
        )}
        {...props}
      >
        {/* Logo - chap tomonda */}
       <Link to="/" className="flex items-center gap-2">
      {/* Logo rasm */}
      <img 
        src={'/logo.png'} 
        alt="Logo" 
        className="w-10 h-10 object-contain" // o‘lchamini shu yerda boshqarasiz
      />
      
      {/* Logo yonidagi matn (ixtiyoriy) */}
      <span className="text-white text-xl font-bold">Arx dexium</span>
    </Link>

        {/* Menu button - o'ng tomonda */}
        <div className="flex justify-end z-20">
          <Menu
            className="text-white cursor-pointer"
            size={24}
            onClick={() => setOpen(!open)}
          />
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-neutral-900 p-6 z-[100] flex flex-col",
                className
              )}
            >
              {/* Header - Logo va X button */}
              <div className="flex items-center justify-between mb-8">
                 <Link to="/" className="flex items-center gap-2">
      {/* Logo rasm */}
      <img 
        src={'/logo.png'} 
        alt="Logo" 
        className="w-10 h-10 object-contain" // o‘lchamini shu yerda boshqarasiz
      />
      
      {/* Logo yonidagi matn (ixtiyoriy) */}
      <span className="text-white text-xl font-bold">Arx dexium</span>
    </Link>
                <div
                  className="text-white cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <X size={28} />
                </div>
              </div>

              {/* Main content - Links */}
              <div className="flex-1 overflow-y-auto">
                {children}
              </div>

              {/* Footer - Contact info */}
              <div className="mt-auto pt-6 border-t border-neutral-700">
                <p className="text-neutral-400 text-sm text-center mb-2">
                  Buyurtma berish uchun
                </p>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-neutral-800 hover:bg-neutral-700 text-white py-3 rounded-lg transition-colors"
                >
                  Contact tugmasini bosing
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
}) => {
  const { open, animate, setOpen } = useSidebar();
  return (
    <Link
      to={link.href}
      onClick={() => {
        // Mobile da link bosilganda sidebar yopiladi
        if (window.innerWidth < 768) {
          setOpen(false);
        }
      }}
      className={cn(
        "flex items-center justify-start gap-2 group/sidebar py-2 px-2 rounded-md hover:bg-neutral-800 transition-colors",
        className
      )}
      {...props}
    >
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};