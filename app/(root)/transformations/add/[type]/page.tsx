import Header from '@/components/shared/Header';
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  try {
    const { userId } = auth();
    console.log("auth()",auth())
    if (!userId) {
  
      redirect('/sign-in')
      return null; // Render nothing if user is not authenticated
    }

    const transformation = transformationTypes[type];
    const user = await getUserById(userId);
    console.log("BIG GIANT FART FART",user)

    return (
      <>
        <Header 
          title={transformation.title}
          subtitle={transformation.subTitle}
        />
      
        <section className="mt-10">
          <TransformationForm 
            action="Add"
            userId={user._id}
            type={transformation.type as TransformationTypeKey}
            creditBalance={user.creditBalance}
          />
        </section>
      </>
    );
  } catch (error) {
    console.error('Error fetching user:', error);
    // Handle authentication or user retrieval error here
    return <p>Error fetching user information. Please try again later.</p>;
  }
};

export default AddTransformationTypePage;
