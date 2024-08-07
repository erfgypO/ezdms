import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {SettingsNavigation} from "@/components/layout/settings-navigation";

export default function SettingsLayout({ children }: { children?: React.ReactNode }) {
    return <Card>
        <CardHeader>
            <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent className={"flex flex-row"}>
            <SettingsNavigation />
            <div className={"px-3"}>
                {children}
            </div>
        </CardContent>
    </Card>
}
