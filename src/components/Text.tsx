import { Button } from "@/components/ui/button"
import SplitText from "@/components/SplitText";



function Text() {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <SplitText
  text="vanihoyat"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
    </div>
  )
}

export default Text