import { Shield } from "lucide-react";

export const LogoIcon = () => {
  return (
    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-2">
      <Shield className="w-5 h-5 text-white" />
    </div>
  );
};

export const CloudOpsIcon = () => {
  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
        <Shield className="w-6 h-6 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-foreground">CloudOps</span>
        <span className="text-xs text-muted-foreground">Tools Hub</span>
      </div>
    </div>
  );
};

export const ToolIcon = ({ icon: Icon }: { icon: any }) => {
  return (
    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-xl">
      <Icon className="w-6 h-6 text-white" />
    </div>
  );
};
