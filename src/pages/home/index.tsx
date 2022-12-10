import NormalCard from "components/card/normalCard";
import CommonPage from "../../components/commonPage";
import './styles.css'

const Home = () => {
    return <CommonPage title="Home">
        <div className="container-card">
            <NormalCard width='7em' maxHeight='12em' titleCard="Lorem ipsu"
            contentCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores iure? Asperiores debitis, voluptatibus vitae ducimus, exercitationem, veniam ratione doloribus perferendis ipsum cum corporis repellendus? Aliquam aut eligendi voluptas ipsam."
            colors={['#839','#3d7']} 
            />
            <NormalCard width='5em' maxHeight='5em' titleCard="Lorem ipsu"
            contentCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores iure? Asperiores debitis, voluptatibus vitae ducimus, exercitationem, veniam ratione doloribus perferendis ipsum cum corporis repellendus? Aliquam aut eligendi voluptas ipsam."
            colors={['hsl(9, 100%, 45%)','hsl(9, 50%, 45%)','hsl(9, 0%, 45%)']} linearGradient 
            />
            <NormalCard width='15em' maxHeight='15em' titleCard="Lorem ipsu"
            contentCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores iure? Asperiores debitis, voluptatibus vitae ducimus, exercitationem, veniam ratione doloribus perferendis ipsum cum corporis repellendus? Aliquam aut eligendi voluptas ipsam."
            colors={['#00f','#00d','#005']} 
            />
            <NormalCard width='6em' maxHeight='8em' titleCard="Lorem ipsu"
            contentCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores iure? Asperiores debitis, voluptatibus vitae ducimus, exercitationem, veniam ratione doloribus perferendis ipsum cum corporis repellendus? Aliquam aut eligendi voluptas ipsam."
            colors={['#000','#222','#aaa']} linearGradient
            />
                        <NormalCard width='6em' maxHeight='8em' titleCard="Lorem ipsu"
            contentCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores iure? Asperiores debitis, voluptatibus vitae ducimus, exercitationem, veniam ratione doloribus perferendis ipsum cum corporis repellendus? Aliquam aut eligendi voluptas ipsam."
            colors={['#000','#222','#aaa']} linearGradient
            />
                        <NormalCard width='6em' maxHeight='8em' titleCard="Lorem ipsu"
            contentCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores iure? Asperiores debitis, voluptatibus vitae ducimus, exercitationem, veniam ratione doloribus perferendis ipsum cum corporis repellendus? Aliquam aut eligendi voluptas ipsam."
            colors={['#000','#222','#aaa']} linearGradient
            />
                        <NormalCard width='6em' maxHeight='8em' titleCard="Lorem ipsu"
            contentCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores iure? Asperiores debitis, voluptatibus vitae ducimus, exercitationem, veniam ratione doloribus perferendis ipsum cum corporis repellendus? Aliquam aut eligendi voluptas ipsam."
            colors={['#000','#222','#aaa']} linearGradient
            />
            <NormalCard width='7em' maxHeight='12em' titleCard="Lorem ipsu"
            contentCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores iure? Asperiores debitis, voluptatibus vitae ducimus, exercitationem, veniam ratione doloribus perferendis ipsum cum corporis repellendus? Aliquam aut eligendi voluptas ipsam."
            colors={['#839','#3d7']} 
            />
        </div>
    </CommonPage>

}
 
export default Home;